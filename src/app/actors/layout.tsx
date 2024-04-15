import {Col, Row} from "antd";

export default function LayoutHello({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Row>
            <Col span={4} offset={1}>
                <h1>Актеры</h1>
            </Col>
            <Col span={16} offset={1}>
                {children}
            </Col>
        </Row>
    );
}
