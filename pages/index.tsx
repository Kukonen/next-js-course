import { Htag, Button, Ptag, Tag, Rating } from "../components";
import {useState} from 'react';
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from 'next';
import axios from "axios";
import {MenuItem} from '../interfaces/menu.interface';

function Home({menu} : HomeProps) : JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <div>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='ghost' arrow='right'>Button</Button>
      <Button appearance='primary' arrow='down'>Button</Button>
      <Ptag size='small'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed ut impedit ab repellat beatae assumenda quae dignissimos ipsam nisi omnis numquam, mollitia, illo excepturi doloremque hic iusto at quia!</Ptag>
      <Ptag size='middle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed ut impedit ab repellat beatae assumenda quae dignissimos ipsam nisi omnis numquam, mollitia, illo excepturi doloremque hic iusto at quia!</Ptag>
      <Ptag size='big'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sed ut impedit ab repellat beatae assumenda quae dignissimos ipsam nisi omnis numquam, mollitia, illo excepturi doloremque hic iusto at quia!</Ptag>
      <Tag size='middle'>middle tag</Tag>
      <Tag size='small' color='green'>big tag</Tag>
      <Tag size='middle' color='grey'>middle tag</Tag>
      <Tag size='small' color='primary'>big tag</Tag>
      <Tag size='middle' color='red'>middle tag</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data : menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLICK_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[],
    firstCategory: number
}