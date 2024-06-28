import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import { generateHash } from "../utils/BcryptUtils";

class AutoControle {
  async signUp(req: Request, res: Response) {
    const body = req.body;

    if (!body.email || !body.name || !body.password) {
      res.json({
        status: "error",
        message: "Falta parâmetros",
      });
      return;
    }

    const hashSenha = await generateHash(body.password);
    if (!hashSenha) {
      res.json({
        status: "error",
        message: "Erro ao criptografar senha ...",
      });
    }

    try {
      const resultado = await AuthService.signUp({
        name: body.name,
        email: body.email,
        password: hashSenha as string
      });
      res.json({
        status: "ok",
        token: resultado?.token,
        user:resultado?.user,
      });
    } catch (error) {
      res.json({
        status: "error",
        message: error,
      });
    }
  }

  async signIn(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      res.json({
        status: "error",
        message: "Falta parâmetros",
      });
      return;
    }

    try {
      const resultado = await AuthService.signIn(email, password);
      if (resultado) {
        res.json({
          status: "ok",
          token: resultado.token,
          user: resultado.user,
        });
      } else {
        res.json({
          status: "error",
          message: "Credenciais inválidas",
        });
      }
    } catch (error) {
      res.json({
        status: "error",
        message: error,
      });
    }
  }
}

export default new AutoControle();