import { MigrationInterface, QueryResult, QueryRunner,Table } from "typeorm"

export class CreateUser1648224139821 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary:true                        
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    }
                ]
            })
        )
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
