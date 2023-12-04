import { CollectionSource } from "./collection-source";
import { Mapper } from "./mapper";
import { QueryFactory } from "./query-factory";

export type DataContext<EntityType = unknown, ModelType = unknown> = {
  collection: CollectionSource<ModelType>;
  mapper: Mapper<EntityType, ModelType>;
  queries: QueryFactory;
}