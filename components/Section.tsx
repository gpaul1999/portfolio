export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl scroll-mt-20 px-4 py-10 sm:px-6">
      <h2 className="mb-6 font-serif text-2xl font-medium tracking-tight sm:text-3xl">
        {title}
      </h2>
      {children}
    </section>
  );
}
