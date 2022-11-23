import { Request, Response } from "express";

export const getInfoTexts = (req: Request, res: Response) => {
  res.json({
    msg: "getInfoTexts"
  })
};

export const getInfoText = (req: Request, res: Response) => {

  const { id } = req.params;

  res.json({
    msg: "getInfoText",
    id
  })
};

export const postInfoText = (req: Request, res: Response) => {

  const { body } = req;

  res.json({
    msg: "postInfoText",
    body
  })
};

export const putInfoText = (req: Request, res: Response) => {

  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: "putInfoText",
    id,
    body
  })
};

export const deleteInfoText = (req: Request, res: Response) => {

  const { id } = req.params;
  
  res.json({
    msg: "deleteInfoText",
    id    
  })
};

