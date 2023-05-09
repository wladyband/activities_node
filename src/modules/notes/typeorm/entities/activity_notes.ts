//import User from '@modules/users/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('activity_notes')
class ActivityNotes {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  descricao: string;

  @Column({
    type: 'int',
    nullable: true,
  })
  checked: number;

  /*@ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;*/

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ActivityNotes;
