import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from 'typeorm';

import slugify from 'slugify';
import { User } from 'src/modules/user/entities/user.entity';

@Entity()
export class Tour {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  slug: string;

  @Column({ unique: true })
  name: string;

  @Column()
  duration: number;

  @Column()
  maxGroupSize: number;

  @Column()
  difficulty: string;

  @Column()
  summary: string;

  @Column()
  description: string;

  @Column()
  imageCover: string;

  @Column({ default: 4.5 })
  ratingsAverage: number;

  @Column({ default: 0 })
  ratingsQuantity: number;

  @Column()
  price: number;

  // @Column()
  // priceDiscount: number;

  @Column()
  startDates: Date;

  @Column()
  startLocation: string;

  @Column()
  locations: string;

  @OneToMany(() => User, (users) => users.role)
  guide: User[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  generateSlug() {
    this.slug = slugify(`${this.name}`, { lower: true });
  }

  @AfterInsert()
  logInsert() {
    console.log('Tour Created with id:', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Tour Updated with id:', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Tour Removed with id:', this.id);
  }
}
