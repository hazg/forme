import { main } from "./data/main";
import "./style.sass"
import { useState } from "react";
import CatalogItem from "./CatalogItem";
import { LeftOutlined } from '@ant-design/icons'
const Catalog = ({ catalog }) => {
    const [data, setData] = useState(main)
    const [isType, setIsType] = useState(false)

    if (catalog) {
        return (
            <>
                <div className="catalog">
                    <div className="catalog-title" onClick={() => {
                        setData(main)
                        setIsType(false)
                    }}><LeftOutlined style={{
                        fontSize: '12px',
                        marginRight: 3
                    }} />Каталог</div>
                    <CatalogItem isType={isType} setIsType={setIsType} data={data} setData={setData} />
                </div>
            </>
        )
    } else {
        return (
            <></>
        );
    }
};

export default Catalog;