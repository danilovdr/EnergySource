import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Card, CardHeader, CardTitle, CardBody, ListGroup, ListGroupItem } from 'reactstrap'

const Sources = () => {
    return (
        <Container>
            <Card className="mt-3">
                <CardHeader>
                    <CardTitle><h4>Список используемой литературы</h4></CardTitle>
                </CardHeader>
                <ListGroup>
                    <ListGroupItem>
                        1. Теплотехника: учеб. для студентов втузов / А. М. Архаров [и др.];
                        под общ. ред. В. И. Крутова. – М.: Машиностроение, 1986. – 432 с.
                        </ListGroupItem>
                    <ListGroupItem>
                        2. Колпакова, Н. В. Газоснабжение: учеб. пособие / Н. В. Колпакова, А. С. Колпаков; под ред. Н. П. Ширяева; М-во образования
                        и науки Рос. Федерации, Урал. федер. ун-т. – Екатеринбург: Изд-во
                        Урал. ун-та, 2014. – 200 с.
                        </ListGroupItem>
                    <ListGroupItem>
                        3. Андрижиевский, А. А. Энергосбережение и энергетический
                        менеджмент / А. А. Андрижиевский, В. И. Володин. – Минск: Выш.
                        шк., 2005. – 294 с.
                        </ListGroupItem>
                    <ListGroupItem>
                        4. Кутателадзе, С. С. Теплопередача и гидродинамическое сопротивление / С. С. Кутателадзе. – М.: Энергоатомиздат, 1990. – 367 с.
                        </ListGroupItem>
                    <ListGroupItem>
                        5. Селезнев А. Энергоэффективность в строительстве / А. Селезнев // Энергоэффективность и энергосбережение. Архитектура
                        и строительство. – 2009. – № 10. – С. 33–35.
                        </ListGroupItem>
                    <ListGroupItem>
                        6. Володин, В. И. Теплофизика и энергетический менеджмент
                        в строительстве / В. И. Володин. – Минск: БГТУ, 2006.
                        </ListGroupItem>
                    <ListGroupItem>
                        роительстве / В. И. Володин. – Минск: БГТУ, 2006.
                        7. Методические рекомендации по составлению технико-экономических обоснований для энергосберегающих мероприятий
                        [Электронный ресурс]. – Режим доступа: http://energoeffekt.gov.by/. –
                        Дата доступа: 08.02.2018.
                    </ListGroupItem>
                    <ListGroupItem>
                        8. Володин, В. И. Энергосбережение: учеб. пособие / В. И. Володин. – Минск: БГТУ, 2001. – 168 с.
                    </ListGroupItem>
                    <ListGroupItem>
                        9. Хутская, Н. Г. Основы энергосбережения: курс лекций /
                        Н. Г. Хутская. – Минск: Тэхналогiя, 1999. – 100 с.
                    </ListGroupItem>
                    <ListGroupItem>
                        10. Сухоцкий, А. Б. Нетрадиционные и возобновляемые источники энергии / А. Б. Сухоцкий, В. Н. Фарафонтов. – Минск:
                        БГТУ, 2009. – 244 с.
                    </ListGroupItem>
                    <ListGroupItem>
                        11. Алешина, А. С. Газификация твердого топлива / А. С. Алешина, В. В. Сергеев. – СПб.: Изд-во Политехн. ун-та, 2010. – 202 с.
                    </ListGroupItem>
                    <ListGroupItem>
                        12. Ковалев, В. В. Методы оценки инвестиционных проектов /
                        В. В. Ковалев. – М.: Финансы и статистика, 1998. – 143 с.
                    </ListGroupItem>
                    <ListGroupItem>
                        13. Манжинский, С. А. Инвестиционное проектирование: метод. указания / А. С. Манжинский, Л. А. Радкевич. – Минск: БГТУ,
                        2010. – 57 с.
                    </ListGroupItem>
                    <ListGroupItem>
                        14. Дмитриченко, А. С. Энергетическое планирование и финансы в сфере энергосбережения: метод. указания / А. С. Дмитриченко, С. А. Манжинский. – Минск: БГТУ, 2013. – 75 с.
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Container>
    );
}

export default Sources;