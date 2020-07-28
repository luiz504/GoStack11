import Appointment from '../infra/typeorm/entities/Appointment';

export interface IAppointmentsRepository {
  // create(): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
