import { MigrationInterface, QueryRunner,Table } from "typeorm"

export class CreateTask1648181159051 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "task",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name: "title",
                        type: "varchar"
                    },
                    {
                        name: "content",
                        type: "varchar"
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("task")
    }
}
