export default function ImgPost({ urlImg, name }) {
  return (
    <div
      className="
      flex flex-col max-w-md
      "
    >
      <div className="text-2xl font-semibold flex justify-between p-4 rounded-t-lg bg-orange-300">
        <h2>Raça: </h2>
        <h2>{name}</h2>
      </div>
      <picture>
        <img
          className="rounded-b-lg object-cover object-center min-w-72 max-h-96"
          src={urlImg}
        />
      </picture>
    </div>
  );
}
