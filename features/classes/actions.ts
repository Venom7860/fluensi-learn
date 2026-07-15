"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

import { classSchema } from "./schema";

export async function createClass(
  courseId: string,
  formData: FormData
) {
  const result = classSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    videoUrl: formData.get("videoUrl"),
    pdfUrl: formData.get("pdfUrl"),
    order: formData.get("order"),

    // Checkbox returns null when unchecked
    isPublished: formData.get("isPublished") === "on",
  });

  if (!result.success) {
    console.log(result.error.flatten());

    return;
  }

  await prisma.class.create({
    data: {
      ...result.data,
      courseId,
    },
  });

  redirect(`/admin/courses/${courseId}`);
}

export async function updateClass(
  courseId: string,
  classId: string,
  formData: FormData
) {
  const result = classSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    videoUrl: formData.get("videoUrl"),
    pdfUrl: formData.get("pdfUrl"),
    order: formData.get("order"),

    isPublished: formData.get("isPublished") === "on",
  });

  if (!result.success) {
    console.log(result.error.flatten());

    return;
  }

  await prisma.class.update({
    where: {
      id: classId,
    },
    data: result.data,
  });

  redirect(`/admin/courses/${courseId}`);
}