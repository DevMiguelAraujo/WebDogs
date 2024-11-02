import LoadingCircle from "../assets/loadingCircle";

export default function Loading(){
  return (
    <section className="flex flex-col text-center font-semibold text-2xl gap-4 py-6 m-4 rounded-lg bg-orange-300">
      <p>Terminando de carregar</p>
      <p>Au! Au!</p>
      <p>Tem muitos petiscos no caminho</p>
      <p>Au! Au!</p>
      <div className="flex justify-center animate-spin">
        <LoadingCircle />
      </div>
    </section>
  )
}