import PageHeader from "@/components/admin/page-header";
import EmptyState from "@/components/admin/empty-state";

export default function CategoriesPage() {
  return (
    <div>
      <PageHeader
        title="Categories"
        description="Manage your course categories."
        buttonText="+ Add Category"
        buttonHref="/admin/categories/new"
      />

      <EmptyState
        title="No Categories"
        description="Create your first course category."
      />
    </div>
  );
}