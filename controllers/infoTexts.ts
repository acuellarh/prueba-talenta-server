import { Request, Response } from "express";
import { InfoTexts } from "../types";

let arrayInfoTexts: InfoTexts[] = [];

export const getInfoTexts = (req: Request, res: Response) => {
  try {
    res.status(200).json(arrayInfoTexts)
    
  } catch (error) {
    console.log(error);
      res.status(500).json({
        msg: "Validar con el administrador" 
      })     
  }
  
};

export const getInfoText = (req: Request, res: Response) => {
  
  const id: number = parseInt(req.params.id);

  try {
    
    let infoTextId = arrayInfoTexts.find(item => item.id === id)
    if(infoTextId) {
      return res.status(200).json(infoTextId)
    } 
    
    res.status(400).json({
      msg: "Elemento no encontrado"
    })
    
    
  } catch (error) {
    console.log(error);
      res.status(500).json({
        msg: "Validar con el administrador" 
    })  
    
  }  
};

export const postInfoTexts = (req: Request, res: Response ) => {

  const { dataText } = req.body;

  try {
    if(dataText === "") {
      return res.status(400).json({
        msg: "El campo esta vacio"
      })
    }

    const newInfoText = {
      id: new Date().valueOf(),
      text: dataText
    }
    arrayInfoTexts.push(newInfoText)

    res.status(200).json(arrayInfoTexts);    
    
  } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Validar con el administrador" 
    })  
  }
}; 


export const putInfoText = (req: Request, res: Response) => {

  const id: number = parseInt(req.params.id);
  const { dataText } = req.body;

  try {
    arrayInfoTexts = arrayInfoTexts.map((item) => {
     if(item.id === id) {
      item.text = dataText     
       return item
     }
     return item         
    })
    res.status(200).json(arrayInfoTexts);
    
  } catch (error) {
    res.status(500).json({
      msg:"Validar con el administrador"
    })    
  }
};

export const deleteInfoText = (req: Request, res: Response) => {

  const id: number = parseInt(req.params.id);

  try {    
    arrayInfoTexts = arrayInfoTexts.filter((item) => item.id !== id)      
    res.status(200).json({
      msg: "Texto Eliminado"
    })
    
  } catch (error) {
    res.status(500).json({
      msg:"Validar con el administrador"
    })    
  }
};
