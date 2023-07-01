import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { Role } from 'src/common/enum/role.enum';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  AfterInsert,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: false })
  emailVerified: boolean;

  @Column({ select: false, nullable: true })
  authConfirmToken: String;

  @Column()
  @Exclude()
  password: string;

  @Column()
  image: string;

  @Column({ default: Role.USER })
  role: Role;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(data: Partial<User> = {}) {
    Object.assign(this, data);
  }

  async checkPassword(plainPassword: string) {
    return await bcrypt.compare(plainPassword, this.password);
  }

  @AfterInsert()
  logInsert() {
    console.log('User Created with id:', this.id);
  }
}
