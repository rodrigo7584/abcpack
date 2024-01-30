import Image from "next/image";
import teste from "../styles/teste.module.scss"

export default function Home() {
  return (<>
    <main className={teste.main}>
      <h2 className={teste.teste}>hello world</h2>
    </main>
          <h2 className={teste.teste}>hello world</h2></>
  );
}
