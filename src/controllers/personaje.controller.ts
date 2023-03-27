import { Request, Response } from "express";

export const retrieve = (req:Request, res: Response)=>{
    res.json('Get');
}

export const retrieveById = (req:Request, res: Response)=>{
    res.json('GetById');
}

export const create = (req:Request, res: Response)=>{
    res.json('Create');
}

export const update = (req:Request, res: Response)=>{
    res.json('Update');
}

export const remove = (req:Request, res: Response)=>{
    res.json('Remove');
}


