import IntroductionBox from "../components/introductionBox";

export default function About() {
  return (
    <main className="flex flex-col w-90p mx-auto gap-10">
      <IntroductionBox
        title="Sobre a"
        subTitle={" Dogs Everywhere!"}
        introductionText={[
          "A Dogseverywhere é um site para você conseguir ver vários cachorros.",
          "O principal objetivo é que você consiga conhecer novas raças.",
          "Caso queira visitar o site original da fotos vá em https://dog.ceo/dog-api/",
        ]}
      />
    </main>
  );
}
