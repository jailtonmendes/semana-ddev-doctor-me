import { PrismaClient } from "@prisma/client";

export default class DataBaseService {
  constructor(readonly connection: PrismaClient) {}

  listDoctor() {
    //lógica de acesso ao banco de dados

    return this.connection.doctor.findMany();
  }
}
