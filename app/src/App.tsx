import "./App.css";
import { CustomForm } from "./_components/forms/customForm";

function App() {
  const handleSubmit = (data: any) => {
    console.log("nueva frase", data);
  };

  const filters: any = [
    {
      label: "frase",
      name: "prhase",
      placeholder: "Escribi una frase",
      type: "text",
    },
    {
      label: "autor",
      name: "author",
      placeholder: "Escribi el author",
      type: "text",
    },
  ];

  return (
    <>
      <CustomForm filters={filters} onSubmit={handleSubmit}></CustomForm>
    </>
  );
}

export default App;
