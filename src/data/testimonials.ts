export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  content: string;
  avatarUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'K. Venkateswara Rao',
    role: 'Retired State Government Employee',
    location: 'Guntur City',
    rating: 5,
    content: 'Buying a CRDA plot near Mangalagiri through MAA Bhoomi was an extremely smooth experience. They handled all the legal documentation, verification, and even assisted with the bank loan from SBI. Very transparent and trustworthy team.'
  },
  {
    id: 'test-2',
    name: 'Srinivas Reddy Pullareddy',
    role: 'NRI (Software Engineer)',
    location: 'Hyderabad / USA',
    rating: 5,
    content: 'As an NRI, buying farm land was a major concern due to trust and boundary verification. MAA Bhoomi Real Estate provided video walk-throughs, checked original survey numbers, and completed the registration cleanly. Highly professional service.'
  },
  {
    id: 'test-3',
    name: 'G. Lakshmi Prasanna',
    role: 'Home Maker',
    location: 'Mangalagiri',
    rating: 5,
    content: 'We searched for a budget 3 BHK independent house for a long time. MAA Bhoomi showed us multiple options matching our budget and helped negotiate a good deal. We are now living in our dream home with full peace of mind!'
  },
  {
    id: 'test-4',
    name: 'P. Prasad Chowdary',
    role: 'Agro Business Owner',
    location: 'Tenali',
    rating: 4,
    content: 'Highly satisfied with their farm land recommendations. They have deep knowledge about the Amaravati Outer Ring Road planning and suggested a plot that has already grown in value by 30% in just one year.'
  }
];
