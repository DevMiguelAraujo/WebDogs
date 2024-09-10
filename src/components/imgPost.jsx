export default function ImgPost({urlImg, name}) {
  return (
    <div>
      <h2 className="text-2xl font-medium">{name}</h2>
      <picture>
        <img className="w-full rounded-b-lg" src={urlImg} />
      </picture>
    </div>
  );
}
