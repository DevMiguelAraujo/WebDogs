import router from "../config_router/router";

export default function Header({paths, children}) {
  const keys = Object.keys(paths);
  const values = Object.values(paths);
  
  if(!children){
    children = 'Dogs EveryWhere'
  }

  return (
    <header>
      <h1>{children}</h1>
      <nav>
        {keys.map((nomes, index) => (
          <div key={nomes} onClick={() => router.navigate(values[index])}>
            {nomes}
          </div>
        ))}
      </nav>
    </header>
  );
}
