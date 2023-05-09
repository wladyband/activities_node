import { EntityRepository, In, Repository } from 'typeorm';
import ActivityNotes from '../entities/activity_notes';

interface IFindActivityNotes {
  id: string;
}
@EntityRepository(ActivityNotes)
class ProductRepository extends Repository<ActivityNotes> {
  public async findByName(name: string): Promise<ActivityNotes | undefined> {
    const activity_notes = this.findOne({
      where: {
        name,
      },
    });
    return activity_notes;
  }

  public async findAllByIds(
    products: IFindActivityNotes[],
  ): Promise<ActivityNotes[]> {
    const ActivityNotesIds = products.map(product => product.id);

    const existentActivityNotes = await this.find({
      where: {
        id: In(ActivityNotesIds),
      },
    });

    return existentActivityNotes;
  }
}

export default ProductRepository;
