import DataBaseService from "@/infra/DataBaseService";

export default class ListDoctorUseCase {
  constructor(readonly database: DataBaseService) {}

  async execute() {
    //lógia de negócio

    const doctors = await this.database.listDoctor();

    if (!doctors) {
      throw new Error("No doctors found");
    }

    return doctors;
  }
}
