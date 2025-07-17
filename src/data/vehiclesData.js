// Vehicle data with comprehensive details
export const vehiclesData = [
  {
    id: 1,
    name: "Toyota Camry",
    brand: "Toyota",
    year: 2022,
    price: 1850000,
    originalPrice: 2100000,
    mileage: "15,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    features: ["GPS Navigation", "Leather Seats", "Sunroof", "Backup Camera"],
    description: "Well-maintained Toyota Camry with excellent fuel efficiency and comfort features.",
    condition: "Excellent",
    owners: 1,
    registration: "DL-01-AB-1234",
    insurance: "Valid till Dec 2024",
    location: "New Delhi",
    seller: "AutoHub Certified",
    rating: 4.8,
    reviews: 24,
    category: "sedan",
  },
  {
    id: 2,
    name: "Honda CR-V",
    brand: "Honda",
    year: 2021,
    price: 2250000,
    originalPrice: 2800000,
    mileage: "22,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    features: ["All-Wheel Drive", "Heated Seats", "Apple CarPlay", "Lane Assist"],
    description: "Spacious SUV perfect for family trips with advanced safety features.",
    condition: "Very Good",
    owners: 1,
    registration: "MH-02-CD-5678",
    insurance: "Valid till Jan 2025",
    location: "Mumbai",
    seller: "AutoHub Certified",
    rating: 4.7,
    reviews: 18,
    category: "suv",
  },
  {
    id: 3,
    name: "BMW 3 Series",
    brand: "BMW",
    year: 2020,
    price: 3200000,
    originalPrice: 4500000,
    mileage: "35,000 km",
    fuelType: "Petrol",
    transmission: "Automatic",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    features: ["Premium Sound", "Sport Mode", "Wireless Charging", "Ambient Lighting"],
    description: "Luxury sedan with premium features and exceptional driving experience.",
    condition: "Good",
    owners: 2,
    registration: "KA-03-EF-9012",
    insurance: "Valid till Mar 2024",
    location: "Bangalore",
    seller: "Premium Motors",
    rating: 4.9,
    reviews: 31,
    category: "luxury",
  },
  {
    id: 4,
    name: "Maruti Swift",
    brand: "Maruti",
    year: 2023,
    price: 650000,
    originalPrice: 750000,
    mileage: "8,000 km",
    fuelType: "Petrol",
    transmission: "Manual",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    features: ["Touchscreen Infotainment", "Dual Airbags", "ABS", "Power Steering"],
    description: "Compact and fuel-efficient hatchback perfect for city driving.",
    condition: "Excellent",
    owners: 1,
    registration: "UP-04-GH-3456",
    insurance: "Valid till Nov 2025",
    location: "Lucknow",
    seller: "City Motors",
    rating: 4.5,
    reviews: 12,
    category: "hatchback",
  },
  {
    id: 5,
    name: "Hyundai Creta",
    brand: "Hyundai",
    year: 2022,
    price: 1450000,
    originalPrice: 1800000,
    mileage: "18,000 km",
    fuelType: "Diesel",
    transmission: "Automatic",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    features: ["Panoramic Sunroof", "Ventilated Seats", "Wireless Charging", "360° Camera"],
    description: "Popular compact SUV with modern features and great build quality.",
    condition: "Very Good",
    owners: 1,
    registration: "TN-05-IJ-7890",
    insurance: "Valid till Aug 2024",
    location: "Chennai",
    seller: "AutoHub Certified",
    rating: 4.6,
    reviews: 28,
    category: "suv",
  },
  {
    id: 6,
    name: "Ford EcoSport",
    brand: "Ford",
    year: 2021,
    price: 950000,
    originalPrice: 1200000,
    mileage: "25,000 km",
    fuelType: "Petrol",
    transmission: "Manual",
    image: "/placeholder.svg?height=300&width=400",
    images: [
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    features: ["SYNC 3", "Emergency Assist", "Hill Launch Assist", "Rear Parking Sensors"],
    description: "Compact SUV with robust build and reliable performance.",
    condition: "Good",
    owners: 1,
    registration: "WB-06-KL-2345",
    insurance: "Valid till Jun 2024",
    location: "Kolkata",
    seller: "Metro Motors",
    rating: 4.3,
    reviews: 15,
    category: "suv",
  },
]

// Enhanced brands data with individual logos
export const brandsData = [
  {
    name: "Toyota",
    logo: "https://live.staticflickr.com/65535/54660056626_c1207ecda6_b.jpg",
    count: vehiclesData.filter((v) => v.brand === "Toyota").length,
    description: "Reliability and innovation combined",
    established: "1937",
  },
  {
    name: "Honda",
    logo: "https://live.staticflickr.com/65535/54660286199_6a2eaf54f1_b.jpg",
    count: vehiclesData.filter((v) => v.brand === "Honda").length,
    description: "The power of dreams",
    established: "1948",

  },
  {
    name: "BMW",
    logo: "https://live.staticflickr.com/65535/54660057371_b037ed8b01_b.jpg",
    count: vehiclesData.filter((v) => v.brand === "BMW").length,
    description: "The ultimate driving machine",
    established: "1916",
  },
  {
    name: "Maruti",
    logo: "https://live.staticflickr.com/65535/54660057891_a045edfb18_b.jpg",
    count: vehiclesData.filter((v) => v.brand === "Maruti").length,
    description: "Way of life",
    established: "1981",
  },
  {
    name: "Hyundai",
    logo: "https://live.staticflickr.com/65535/54660057161_c24836558b_b.jpg",
    count: vehiclesData.filter((v) => v.brand === "Hyundai").length,
    description: "New thinking, new possibilities",
    established: "1967",
  },
  {
    name: "Ford",
    logo: "https://live.staticflickr.com/65535/54660067496_98261c601f_b.jpg",
    count: vehiclesData.filter((v) => v.brand === "Ford").length,
    description: "Built Ford tough",
    established: "1903",
  },
  {
    name: "Mercedes",
    logo: "https://live.staticflickr.com/65535/54660392185_2d4f0cfd5a_b.jpg",
    count: 0,
    description: "The best or nothing",
    established: "1926",
  },
  {
    name: "Audi",
    logo: "https://live.staticflickr.com/65535/54660392325_3bcfa8d35d_b.jpg",
    count: 0,
    description: "Vorsprung durch technik",
    established: "1909",
  },
  {
    name: "Volkswagen",
    logo: "https://live.staticflickr.com/65535/54660068026_cc427ae0b4_b.jpg",
    count: 0,
    description: "Das auto",
    established: "1937",
  },
  {
    name: "Nissan",
    logo: "https://live.staticflickr.com/65535/54660289943_17e1429fac_b.jpg",
    count: 0,
    description: "Innovation that excites",
    established: "1933",
  },
  {
    name: "Tata",
    logo: "https://live.staticflickr.com/65535/54660296424_56d347e543_b.jpg",
    count: 0,
    description: "Connecting aspirations",
    established: "1868",
  },
  {
    name: "Mahindra",
    logo: "https://live.staticflickr.com/65535/54660296584_f01b332efe_b.jpg",
    count: 0,
    description: "Rise",
    established: "1945",
  },
]

// Services data for the Services component
export const servicesData = [
  {
    title: "Vehicle Inspection",
    description: "Comprehensive 150-point inspection for all vehicles",
    icon: "Car",
    color: "bg-blue-500",
  },
  {
    title: "Financing Options",
    description: "Flexible financing with competitive rates",
    icon: "CreditCard",
    color: "bg-green-500",
  },
  {
    title: "Trade-In Service",
    description: "Get the best value for your current vehicle",
    icon: "RefreshCw",
    color: "bg-purple-500",
  },
  {
    title: "Extended Warranty",
    description: "Comprehensive warranty coverage available",
    icon: "Shield",
    color: "bg-orange-500",
  },
]

// Testimonials data
export const testimonialsData = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Excellent service! Found my dream car at an amazing price. The team was professional and helpful throughout.",
    image: "/placeholder.svg?height=60&width=60",
    location: "New York",
  },
  {
    name: "Mike Chen",
    rating: 5,
    comment: "Great experience buying my first car here. They made the process smooth and stress-free.",
    image: "/placeholder.svg?height=60&width=60",
    location: "California",
  },
  {
    name: "Emily Davis",
    rating: 4,
    comment: "Quality vehicles and honest pricing. Would definitely recommend to friends and family.",
    image: "/placeholder.svg?height=60&width=60",
    location: "Texas",
  },
]

// FAQs data
export const faqsData = [
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we offer various financing options with competitive rates. Our finance team can help you find the best option for your budget.",
  },
  {
    question: "Can I trade in my current vehicle?",
    answer: "We accept trade-ins and offer competitive valuations. Bring your vehicle for a free assessment.",
  },
  {
    question: "Do you provide vehicle history reports?",
    answer:
      "Yes, we provide detailed vehicle history reports for all our cars, including accident history, service records, and ownership details.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "We offer comprehensive warranties on all vehicles, with options for extended coverage. Details vary by vehicle age and condition.",
  },
  {
    question: "Can I schedule a test drive?",
    answer:
      "You can schedule a test drive online or by calling us. We recommend booking in advance to ensure availability.",
  },
]

// Categories for filtering
export const categories = [
  { id: "all", name: "All Vehicles", icon: "🚗" },
  { id: "sedan", name: "Sedan", icon: "🚙" },
  { id: "suv", name: "SUV", icon: "🚐" },
  { id: "hatchback", name: "Hatchback", icon: "🚗" },
  { id: "luxury", name: "Luxury", icon: "✨" },
]

// Price ranges for filtering
export const priceRanges = [
  { id: "all", name: "All Prices", min: 0, max: Number.POSITIVE_INFINITY },
  { id: "under-10", name: "Under ₹10 Lakh", min: 0, max: 1000000 },
  { id: "10-20", name: "₹10-20 Lakh", min: 1000000, max: 2000000 },
  { id: "20-30", name: "₹20-30 Lakh", min: 2000000, max: 3000000 },
  { id: "above-30", name: "Above ₹30 Lakh", min: 3000000, max: Number.POSITIVE_INFINITY },
]

// Fuel types for filtering
export const fuelTypes = [
  { id: "all", name: "All Fuel Types" },
  { id: "petrol", name: "Petrol" },
  { id: "diesel", name: "Diesel" },
  { id: "electric", name: "Electric" },
  { id: "hybrid", name: "Hybrid" },
]

// Transmission types for filtering
export const transmissionTypes = [
  { id: "all", name: "All Transmissions" },
  { id: "manual", name: "Manual" },
  { id: "automatic", name: "Automatic" },
]

// Sample admin data for dashboard
export const adminData = {
  totalSales: 1250000000,
  totalVehicles: 156,
  activeBuyers: 89,
  monthlyGrowth: 12.5,
  salesData: [
    { month: "Jan", sales: 85000000 },
    { month: "Feb", sales: 92000000 },
    { month: "Mar", sales: 78000000 },
    { month: "Apr", sales: 105000000 },
    { month: "May", sales: 118000000 },
    { month: "Jun", sales: 125000000 },
  ],
  vehicleTypeData: [
    { type: "Sedan", count: 45, color: "#3B82F6" },
    { type: "SUV", count: 38, color: "#10B981" },
    { type: "Hatchback", count: 32, color: "#F59E0B" },
    { type: "Luxury", count: 25, color: "#8B5CF6" },
    { type: "Others", count: 16, color: "#EF4444" },
  ],
  recentActivities: [
    { id: 1, action: "New vehicle added", vehicle: "Toyota Camry 2023", time: "2 hours ago" },
    { id: 2, action: "Sale completed", vehicle: "Honda CR-V 2022", time: "4 hours ago" },
    { id: 3, action: "Price updated", vehicle: "BMW 3 Series 2021", time: "6 hours ago" },
    { id: 4, action: "New inquiry", vehicle: "Maruti Swift 2023", time: "8 hours ago" },
    { id: 5, action: "Vehicle inspection", vehicle: "Hyundai Creta 2022", time: "1 day ago" },
  ],
}
