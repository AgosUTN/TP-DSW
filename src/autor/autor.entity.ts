import {
  Entity,
  OneToMany,
  Property,
  Cascade,
  Collection,
} from "@mikro-orm/core";

import { BaseEntity } from "../shared/DB/baseEntity.entity.js";

import { Libro } from "../libro/libro.entity.js";

@Entity()
export class Autor extends BaseEntity {
  @Property()
  nombre!: string;

  @Property()
  apellido!: string;

  @OneToMany(() => Libro, (libro) => libro.miAutor)
  misLibros = new Collection<Libro>(this);
}
