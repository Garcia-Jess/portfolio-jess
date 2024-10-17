interface TitleCardProps {
  title: string;
}
export default function TitleCard({ title }: TitleCardProps) {
  return (
    <div className="flex justify-start gap-5 px-10 md:mx-10">
      <div className="bg-indigo-700 h-10 w-20"></div>
      <h1 className="text-white font-bold text-2xl md:text-4xl">{title}</h1>
    </div>
  );
}
