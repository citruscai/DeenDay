type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="space-y-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-gray-600">{description}</p>
    </header>
  );
}
