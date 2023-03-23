import { FunctionComponent } from "react";
import { DetailData } from "../../../domain/entities";
import { Card } from "../Card";

type HomeTemplateProps = {
    data?: Array<DetailData>;
  };

export const HomeTemplate: FunctionComponent<HomeTemplateProps> = ({data}) => {
    function ShowCard(card: DetailData, index: number) {
        return <Card key={`card-${index}`} {...card} />;
    }
      
    return(
        <div>
            {data?.map(ShowCard)}
        </div>
    )
}