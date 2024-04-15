import { Col, Row } from 'antd';


export default function KinoLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <Row>
            <Col span={4} offset={1}>
                <h1>Фильмы</h1>
            </Col>
            <Col span={16} offset={1}>
                {children}
            </Col>
        </Row>
    );
}
