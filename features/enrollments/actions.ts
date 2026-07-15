"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

export async function updateStudentCourses(
  studentId: string,
  formData: FormData
) {
  const courseIds = formData.getAll("courseIds") as string[];

  await prisma.enrollment.deleteMany({
    where: {
      studentId,
    },
  });

  if (courseIds.length > 0) {
    await prisma.enrollment.createMany({
      data: courseIds.map((courseId) => ({
        studentId,
        courseId,
      })),
    });
  }

  redirect("/admin/students");
}