import { MigrationInterface, QueryRunner,Table } from "typeorm"

export class CreateTask1648181159051 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tasks",
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
                        name: "user_id",
                        type: "uiid"
                    },
                    {
                        name:"user_name",
                        type: "varchar"
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys:[
                    {
                        name:"fk_user_id",
                        columnNames: ["user_id"],
                        referencedTableName:"users",
                        referencedColumnNames:["id"]
                       },
                    {
                        name:"fk_author_name",
                        columnNames:["user_name"],
                        referencedTableName:"users",
                        referencedColumnNames:["name"]
                    }
                ]
            })
        );
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable("task")
    }
}
