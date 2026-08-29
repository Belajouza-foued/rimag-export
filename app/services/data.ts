export type Service = {
  id: string;
  title: string;
  text: string;
  icon: string;
  image: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "export",
    title: "services.items.export.title",
    icon: "bi bi-box-seam",
    image: "/images/export-4.avif",
    text: "services.items.export.text",
    points: [
      "services.items.export.points.0",
      "services.items.export.points.1",
      "services.items.export.points.2",
      "services.items.export.points.3",
    ],
  },

  {
    id: "sourcing",
    title: "services.items.sourcing.title",
    icon: "bi bi-search",
    image: "/images/export-3.avif",
    text: "services.items.sourcing.text",
    points: [
      "services.items.sourcing.points.0",
      "services.items.sourcing.points.1",
      "services.items.sourcing.points.2",
      "services.items.sourcing.points.3",
    ],
  },

  {
    id: "logistique",
    title: "services.items.logistique.title",
    icon: "bi bi-truck",
    image: "/images/logistic.jpg",
    text: "services.items.logistique.text",
    points: [
      "services.items.logistique.points.0",
      "services.items.logistique.points.1",
      "services.items.logistique.points.2",
      "services.items.logistique.points.3",
    ],
  },

  {
    id: "transport-maritime",
    title: "services.items.maritime.title",
    icon: "bi bi-box-seam",
    image: "/images/maritime.avif",
    text: "services.items.maritime.text",
    points: [
      "services.items.maritime.points.0",
      "services.items.maritime.points.1",
      "services.items.maritime.points.2",
      "services.items.maritime.points.3",
    ],
  },

  {
    id: "commerce-b2b",
    title: "services.items.b2b.title",
    icon: "bi bi-building",
    image: "/images/commerce-1.avif",
    text: "services.items.b2b.text",
    points: [
      "services.items.b2b.points.0",
      "services.items.b2b.points.1",
      "services.items.b2b.points.2",
      "services.items.b2b.points.3",
    ],
  },

  {
    id: "accompagnement",
    title: "services.items.accompagnement.title",
    icon: "bi bi-globe2",
    image: "/images/accompagne.avif",
    text: "services.items.accompagnement.text",
    points: [
      "services.items.accompagnement.points.0",
      "services.items.accompagnement.points.1",
      "services.items.accompagnement.points.2",
      "services.items.accompagnement.points.3",
    ],
  },
];

export const process = [
  {
    step: "01",
    icon: "bi bi-search",
    title: "services.process.steps.0.title",
    text: "services.process.steps.0.text",
  },
  {
    step: "02",
    icon: "bi bi-box-seam",
    title: "services.process.steps.1.title",
    text: "services.process.steps.1.text",
  },
  {
    step: "03",
    icon: "bi bi-file-earmark-text",
    title: "services.process.steps.2.title",
    text: "services.process.steps.2.text",
  },
  {
    step: "04",
    icon: "bi bi-airplane",
    title: "services.process.steps.3.title",
    text: "services.process.steps.3.text",
  },
];