import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';
import { Role } from 'src/common/enum/role.enum';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  AfterInsert,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ default: Role.USER })
  role: Role;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(data: Partial<User> = {}) {
    Object.assign(this, data);
  }

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }

  async checkPassword(plainPassword: string) {
    return await bcrypt.compare(plainPassword, this.password);
  }

  @AfterInsert()
  logInsert() {
    console.log('User Created with id:', this.id);
  }
}
