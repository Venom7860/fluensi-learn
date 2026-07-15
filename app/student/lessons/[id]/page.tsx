import Link from "next/link";
import { notFound } from "next/navigation";

import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

function getYoutubeEmbedUrl(url: string) {
  if (!url) return "";

  if (url.includes("watch?v=")) {
    return url.replace("watch?v=", "embed/");
  }

  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1];
    return `https://www.youtube.com/embed/${id}`;
  }

  return url;
}

export default async function LessonPage({
  params,
}: Props) {
  const { id } = await params;

  const lesson = await prisma.class.findUnique({
    where: {
      id,
    },
    include: {
      course: true,
    },
  });

  if (!lesson) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl p-10">
      <Link
        href={`/student/courses/${lesson.courseId}`}
        className="text-purple-600 hover:underline"
      >
        ← Back to Course
      </Link>

      <h1 className="mt-6 text-4xl font-bold">
        {lesson.title}
      </h1>

      <p className="mt-3 text-gray-600">
        {lesson.description}
      </p>

      {lesson.videoUrl && (
        <div className="mt-8 overflow-hidden rounded-xl border">
          <iframe
            className="aspect-video w-full"
            src={getYoutubeEmbedUrl(lesson.videoUrl)}
            allowFullScreen
          />
        </div>
      )}

      {lesson.pdfUrl && (
        <div className="mt-8">
          <a
            href={lesson.pdfUrl}
            target="_blank"
            className="inline-flex rounded-lg bg-purple-600 px-6 py-3 text-white hover:bg-purple-700"
          >
            📄 Download Notes
          </a>
        </div>
      )}
    </div>
  );
}