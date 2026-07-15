"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

import { courseSchema } from "./schema";

export async function createCourse(formData: FormData) {
  const values = {
    title: formData.get("title"),
    description: formData.get("description"),
    isPublished: formData.get("isPublished") === "on",
  };

  const result = courseSchema.safeParse(values);

  if (!result.success) {
    console.log(result.error.flatten());

    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.course.create({
    data: {
      title: result.data.title,
      description: result.data.description || null,
      isPublished: result.data.isPublished,
    },
  });

  redirect("/admin/courses");
}

export async function updateCourse(
  id: string,
  formData: FormData
) {
  const values = {
    title: formData.get("title"),
    description: formData.get("description"),
    isPublished: formData.get("isPublished") === "on",
  };

  const result = courseSchema.safeParse(values);

  if (!result.success) {
    console.log(result.error.flatten());

    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await prisma.course.update({
    where: {
      id,
    },
    data: {
      title: result.data.title,
      description: result.data.description || null,
      isPublished: result.data.isPublished,
    },
  });

  redirect("/admin/courses");
}

export async function deleteCourse(id: string) {
  // Delete enrollments first
  await prisma.enrollment.deleteMany({
    where: {
      courseId: id,
    },
  });

  // Delete all classes
  await prisma.class.deleteMany({
    where: {
      courseId: id,
    },
  });

  // Delete the course
  await prisma.course.delete({
    where: {
      id,
    },
  });

  redirect("/admin/courses");
}