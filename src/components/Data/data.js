function getRanndomStock(){
    return Math.floor(Math.random() *6)
}

const CarsData = [
    {
        id: 1,
        name: 'Toyota Corolla',
        description: 'Sedán compacto con tecnología avanzada y excelente eficiencia de combustible.',
        price: 220000,
        stock: getRanndomStock(),
        img: 'url/toyota_corolla_image.jpg',
        category: 'Sedan'
    },
    {
        id: 2,
        name: 'Toyota Cross',
        description: 'SUV versátil con tracción en las cuatro ruedas y sistema de entretenimiento avanzado.',
        price: 22000,
        stock: getRanndomStock(),
        img: 'url/toyota_cross_image.jpg',
        category: 'Suv'
    },
    {
        id: 3,
        name: 'Chevrolet Cruze',
        description: 'Sedán elegante con características de seguridad líderes en la industria.',
        price: 22000,
        stock: 5,
        img: 'url/chevrolet_cruze_image.jpg',
        category: 'Sedan'
    },
    {
        id: 4,
        name: 'Toyota Etios',
        description: 'Automóvil compacto con diseño moderno y eficiencia en el consumo de combustible.',
        price: 22000,
        stock: 5,
        img: 'url/toyota_etios_image.jpg',
        category: 'Compacto'
    },
    {
        id: 5,
        name: 'Ford Fiesta',
        description: 'Compacto ágil con características de seguridad avanzadas y conectividad fácil.',
        price: 22000,
        stock: 5,
        img: 'url/ford_fiesta_image.jpg',
        category: 'Compacto'
    },
    {
        id: 6,
        name: 'Toyota Hilux',
        description: 'Camioneta robusta con capacidad todoterreno y espacio de carga versátil.',
        price: 22000,
        stock: 5,
        img: 'url/toyota_hilux_image.jpg',
        category: 'Camioneta'
    },
    {
        id: 7,
        name: 'Volkswagen Nivus',
        description: 'SUV compacto con diseño deportivo y tecnología de asistencia al conductor.',
        price: 22000,
        stock: 5,
        img: 'url/volkswagen_nivus_image.jpg',
        category: 'Suv'
    },
    {
        id: 8,
        name: 'Renault Oroch',
        description: 'Camioneta con estilo urbano y capacidad de carga para la vida cotidiana.',
        price: 22000,
        stock: 5,
        img: 'url/renault_oroch_image.jpg',
        category: 'Camioneta'
    },
    {
        id: 9,
        name: 'Ford Ranger',
        description: 'SUV potente con tracción en las cuatro ruedas y capacidad de remolque robusta.',
        price: 22000,
        stock: 5,
        img: 'url/ford_ranger_image.jpg',
        category: 'Suv'
    },
    {
        id: 10,
        name: 'Renault Sandero',
        description: 'Compacto con estilo moderno y características de seguridad avanzadas.',
        price: 22000,
        stock: 5,
        img: 'url/renault_sandero_image.jpg',
        category: 'Compacto'
    },
    {
        id: 11,
        name: 'Volkswagen Vento',
        description: 'Sedán elegante con rendimiento eficiente y comodidades de lujo.',
        price: 22000,
        stock: 5,
        img: 'url/volkswagen_vento_image.jpg',
        category: 'Sedan'
    },
    {
        id: 12,
        name: 'Fiat Toro',
        description: 'Camioneta compacta con estilo italiano y tecnología de última generación.',
        price: 22000,
        stock: 5,
        img: 'url/fiat_toro_image.jpg',
        category: 'Camioneta'
    },
    {
        id: 13,
        name: 'Honda Accord',
        description: 'Sedán elegante con rendimiento suave y comodidades de lujo.',
        price: 30000,
        stock: 5,
        img: 'url/honda_accord_image.jpg',
        category: 'Sedan'
    },
    {
        id: 14,
        name: 'Nissan Rogue',
        description: 'SUV compacto con características de seguridad avanzadas y eficiencia de combustible.',
        price: 32000,
        stock: 5,
        img: 'url/nissan_rogue_image.jpg',
        category: 'Suv'
    },
    {
        id: 15,
        name: 'Mazda CX-5',
        description: 'SUV moderno con diseño elegante y tecnología de vanguardia.',
        price: 34000,
        stock: 5,
        img: 'url/mazda_cx5_image.jpg',
        category: 'Suv'
    },
    {
        id: 16,
        name: 'Hyundai Elantra',
        description: 'Compacto con estilo deportivo y eficiencia en el consumo de combustible.',
        price: 20000,
        stock: 5,
        img: 'url/hyundai_elantra_image.jpg',
        category: 'Compacto'
    },
    {
        id: 17,
        name: 'Kia Soul',
        description: 'Compacto único con características personalizables y tecnología innovadora.',
        price: 22000,
        stock: 5,
        img: 'url/kia_soul_image.jpg',
        category: 'Compacto'
    },
    {
        id: 18,
        name: 'Jeep Wrangler',
        description: 'SUV todoterreno con capacidad de exploración off-road y diseño robusto.',
        price: 38000,
        stock: 5,
        img: 'url/jeep_wrangler_image.jpg',
        category: 'Suv'
    },
    {
        id: 19,
        name: 'Subaru Outback',
        description: 'SUV familiar con tracción en las cuatro ruedas y espacio versátil para carga.',
        price: 36000,
        stock: 5,
        img: 'url/subaru_outback_image.jpg',
        category: 'Suv'
    },
    {
        id: 20,
        name: 'Audi A4',
        description: 'Sedán de lujo con tecnología avanzada y acabados premium.',
        price: 42000,
        stock: 5,
        img: 'url/audi_a4_image.jpg',
        category: 'Sedan'
    }]
console.log(CarsData)