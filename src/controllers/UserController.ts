import { Request, Response } from "express";
import UserDataBaseService from "../services/UserDataBaseService";

class UsuarioControle {
  async listUsers(_: Request, response: Response) {
    const users = await UserDataBaseService.listDBUsers();
    return response.json({ users }).status(200);
  }

  async createUser(request: Request, response: Response) {
    const { body } = request;

    const input = {
      name: body?.name,
      email: body?.email,
      password: body?.password,
    };

    if (Object.values(input).includes(undefined)) {
      return response.json({
        message: "Falta parâmetros",
      }).status(400);
    }

    const { name, email } = input;

    const novousuario = await UserDataBaseService.insertDBUser({
      name,
      email,
      password: ""
    });
    return response.json({ novousuario }).status(201);
  }

  async updateUser(request: Request, response: Response) {
    const userId = request.params.id;
    if (!userId) return response.json({ message: "Faltou o ID" }).status(400);

    const { body } = request;

    const input = {
      email: body?.email,
      name: body?.name,
    };

    if (Object.values(input).includes(undefined)) {
      return response.json({
        message: "Falta parâmetros",
      }).status(400);
    };

    const { name, email } = input;

    const atualizarUsuario = await UserDataBaseService.updateDBUser(
      {
        name,
        email,
      },
      parseInt(userId)
    );
    return response.json({ newuser: atualizarUsuario }).status(200);
  }

  async deleteUser(request: Request, response: Response) {
    const userId = request.params.id;
    if (!userId) return response.json({ message: "Faltou o ID" }).status(400);

    await UserDataBaseService.deleteDBUser(parseInt(userId));
    return response.json({ message: "usuário deletado com sucesso" }).status(204);
  }
}

export default new UsuarioControle();