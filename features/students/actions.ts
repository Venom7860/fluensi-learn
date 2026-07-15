"use server";

import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

import { createStudentSchema } from "./schema";

export async function createStudent(formData: FormData) {
  const values = {
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = createStudentSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await auth.api.createUser({
      body: {
        name: result.data.name,
        email: result.data.email,
        password: result.data.password,
        role: "STUDENT",
      },
    });
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to create student.",
    };
  }

  redirect("/admin/students");
}

export async function updateStudent(
  id: string,
  formData: FormData
) {
  const values = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  const result = createStudentSchema
    .omit({
      password: true,
    })
    .safeParse(values);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        name: result.data.name,
        email: result.data.email,
      },
    });
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to update student.",
    };
  }

  redirect("/admin/students");
}