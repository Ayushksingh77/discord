
const mockData = [10, 20, 30, 25, 40, 50, 60, 55, 70, 80, 90, 100];

export default function Chart() {
  // SVG line chart (mock)
  const width = 320;
  const height = 80;
  const max = Math.max(...mockData);
  const points = mockData
    .map((v, i) => `${(i / (mockData.length - 1)) * width},${height - (v / max) * height}`)
    .join(" ");
  return (
    <svg width={width} height={height} className="w-full h-20">
      <polyline
        fill="none"
        stroke="#6366f1"
        strokeWidth="3"
        points={points}
      />
      <circle cx={width} cy={height - (mockData[mockData.length - 1] / max) * height} r="4" fill="#6366f1" />
    </svg>
  );
} 