import { Response } from 'express';

const sendResponds = (res, msg, result) => {
  res.status(200).json({
    success: true,
    massage: msg,
    data: result,
  });
};

export const sendRespondsDosentExist = (res, message, result) => {
  res.status(204).json({
    success: false,
    message,
    data: result,
  });
};

export default sendResponds;
