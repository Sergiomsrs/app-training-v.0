import { useContext } from "react";
import { FormContext } from "../../../../../context/FormContext";

export const useDimanicForm = () => {

    const { apps, setApps } = useContext(FormContext)


    const enviarDatos = async () => {


        if (window.confirm('¿Estás seguro de que deseas enviar este WOD?')) {

            try {
                fetch('http://localhost:8080/list', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        bloques: apps,
                    })

                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });

            } catch (error) {
                console.error('Error obteniendo el último ID:', error);

            }
            setApps([{ ejercicios: [], id: 1, title: "", desc: "", tipo: "" }]);
        }

    }


    const handleInputChange = (e, appId, index) => {

        const { name, value } = e.target;
        const newApps = [...apps];
        const appIndex = newApps.findIndex(app => app.id === appId);
        newApps[appIndex].ejercicios[index] = {
            ...newApps[appIndex].ejercicios[index],
            [name]: value,
        };
        setApps(newApps);

    };

    const handleHeaderChange = (e, appId) => {
        const { name, value } = e.target;
  const newApps = [...apps];
  const appIndex = newApps.findIndex((app) => app.id === appId);
  
  if (appIndex !== -1) {
    newApps[appIndex] = {
      ...newApps[appIndex],
      [name]: value
    };
    setApps(newApps);
  } else {
    console.error(`App with id ${appId} not found`);
  }
      };

    const handleResetForm = () => {
        setApps([{ ejercicios: [], id: 1, title: "", desc: "", tipo: "" }])
    }

    const handleClick = (appId) => {
        const newApps = [...apps];
        const appIndex = newApps.findIndex(app => app.id === appId);
        newApps[appIndex].ejercicios.push({ id: newApps[appIndex].ejercicios.length + 1 });
        setApps(newApps);
    };

    const handleAddApp = () => {
        const newId = Math.max(...apps.map(app => app.id)) + 1;
        setApps([...apps, { ejercicios: [], id: newId, title: "", desc: "", tipo: "" }]);
    };


    const handleDeleteRow = (appId, index) => {
        const newApps = [...apps];
        const BlockIndex = newApps.findIndex(app => app.id === appId);
        newApps[BlockIndex].ejercicios.splice(index, 1);
        setApps(newApps);
    };

    const handleDeleteBlock = (appId) => {
        const newApps = [...apps];
        const BlockIndex = newApps.findIndex(app => app.id === appId);
        newApps.splice(BlockIndex, 1);
        setApps(newApps);

    }

    return {
        apps,
        enviarDatos,
        handleInputChange,
        handleResetForm,
        handleClick,
        handleAddApp,
        handleDeleteRow,
        handleDeleteBlock,
        handleHeaderChange
    }
}