export default function ImgPost({ urlImg, name }) {
  return (
    <div>
      {name && <h2 className="text-2xl font-medium max-h-80">{name}</h2>}
      <picture>
        <img className="w-full rounded-b-lg max-h-80 object-cover object-center" src={urlImg} />
      </picture>
    </div>
  );
}
