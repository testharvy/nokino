"use client"

import FilterForm from "@/components/FilterForm/FilterForm";
import {Col, Row, Typography} from "antd";
import Title from 'antd/es/typography/Title'
import Paragraph from 'antd/es/typography/Paragraph'

export default function Home() {

    return (
          <Row>
              <Col span={6} >
                  <h1>Главная</h1>
              </Col>
              <Col span={16} offset={1}>
                  <Row gutter={[24, 16]}>
                      <Typography>
                          <Title level={2}>Lorem ipsum dolor sit amet</Title>
                          <Paragraph>
                          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id donec ultrices tincidunt arcu. In dictum non consectetur a erat nam. Nec feugiat in fermentum posuere. In pellentesque massa placerat duis ultricies lacus sed. Venenatis cras sed felis eget velit aliquet. Lectus arcu bibendum at varius vel pharetra. Suspendisse ultrices gravida dictum fusce ut placerat orci. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Morbi tincidunt augue interdum velit euismod. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Urna cursus eget nunc scelerisque. Viverra adipiscing at in tellus integer feugiat scelerisque. Tempor nec feugiat nisl pretium fusce. Mauris augue neque gravida in fermentum et sollicitudin ac orci. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a.
                          </Paragraph>
                          <Paragraph>
                              Bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida. Eget gravida cum sociis natoque. Convallis posuere morbi leo urna molestie. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Ut porttitor leo a diam sollicitudin tempor id eu. Nunc mi ipsum faucibus vitae. Nunc sed id semper risus in hendrerit gravida rutrum. Senectus et netus et malesuada fames ac turpis egestas. At elementum eu facilisis sed odio morbi quis. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Quis blandit turpis cursus in hac habitasse platea dictumst.
                          </Paragraph>
                          <Paragraph>
                              Sagittis orci a scelerisque purus semper eget. Feugiat pretium nibh ipsum consequat nisl. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Enim ut sem viverra aliquet eget sit amet. At lectus urna duis convallis convallis tellus id. Dignissim enim sit amet venenatis. Vulputate sapien nec sagittis aliquam malesuada bibendum. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Viverra accumsan in nisl nisi scelerisque eu ultrices. Egestas quis ipsum suspendisse ultrices gravida. Lobortis feugiat vivamus at augue eget arcu. Pharetra convallis posuere morbi leo urna. Justo eget magna fermentum iaculis eu non.
                          </Paragraph>
                      </Typography>
                  </Row>
              </Col>
          </Row>
    );
}
