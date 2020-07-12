import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export default class ChangeProviderFieldToProviderId1594555155234
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("appointments", "provider");
    await queryRunner.addColumn(
      "appointments",
      new TableColumn({
        name: "provider_id",
        type: "uuid",
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      "appointments",
      new TableForeignKey({
        name: "AppointmentProvider",
        columnNames: ["provider_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL", // RESTRICT - block operation // CASCADE - delete all relatations //SET NULL set null where have relations
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("appointments", "AppointmentProvider");

    await queryRunner.dropColumn("appointments", "provider_id");

    await queryRunner.addColumn(
      "appointments",
      new TableColumn({
        name: "provider",
        type: "varchar",
      })
    );
  }
}
