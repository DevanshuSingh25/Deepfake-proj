import { Shield, Target, Brain, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/Card';

export default function About() {
  const pipeline = [
    {
      step: '1',
      title: 'Media Upload',
      description: 'Users upload video or audio files through our secure interface',
    },
    {
      step: '2',
      title: 'Preprocessing',
      description: 'Files are validated, normalized, and prepared for analysis',
    },
    {
      step: '3',
      title: 'Feature Extraction',
      description: 'ResNeXt networks extract spatial features from frames or spectrograms',
    },
    {
      step: '4',
      title: 'Temporal Analysis',
      description: 'LSTM networks analyze sequential patterns across time',
    },
    {
      step: '5',
      title: 'Classification',
      description: 'Combined features produce a final decision with confidence scores',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">About the Project</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mission & Approach
            </h1>
            <p className="text-xl text-muted-foreground">
              Building robust AI systems to detect and combat deepfake media manipulation
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                As deepfake technology becomes increasingly sophisticated, the need for reliable 
                detection systems is critical. Our mission is to provide accessible, accurate tools 
                that help individuals and organizations verify media authenticity.
              </p>
              <p className="text-lg text-muted-foreground">
                We combine state-of-the-art neural network architectures with user-friendly 
                interfaces to make deepfake detection available to everyone who needs it.
              </p>
            </div>
            <Card gradient className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Target className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Accuracy</h3>
                    <p className="text-sm text-muted-foreground">
                      Advanced neural networks trained on diverse datasets
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Security</h3>
                    <p className="text-sm text-muted-foreground">
                      Privacy-first design with no permanent file storage
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold mb-2">Accessibility</h3>
                    <p className="text-sm text-muted-foreground">
                      Easy-to-use interface for technical and non-technical users
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Pipeline</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to deepfake detection combining spatial and temporal analysis
              </p>
            </div>

            <div className="space-y-6">
              {pipeline.map((item, idx) => (
                <Card key={idx} glass className="p-6 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-white">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    {idx < pipeline.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-muted-foreground mt-3" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Neural Architecture</h2>
              <p className="text-lg text-muted-foreground">
                Our dual-stage architecture leverages the strengths of both spatial and temporal analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">ResNeXt Networks</h3>
                  <p className="text-muted-foreground mb-4">
                    ResNeXt (Residual Network with NeXt dimension) provides powerful feature extraction 
                    from individual frames (video) or spectrogram slices (audio).
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Deep residual connections for gradient flow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Multi-path aggregated transformations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Robust to various manipulation techniques</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">LSTM Networks</h3>
                  <p className="text-muted-foreground mb-4">
                    Long Short-Term Memory networks capture temporal dependencies and inconsistencies 
                    that distinguish deepfakes from authentic media.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Sequential pattern recognition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Long-range temporal consistency checks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <span>Detection of subtle anomalies over time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Considerations */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Ethical Considerations</h2>
            <Card glass className="p-8">
              <div className="space-y-6 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Responsible Use:</strong> This tool is designed 
                  for legitimate verification purposes, including media forensics, journalistic fact-checking, 
                  and personal security. We strongly discourage any malicious applications.
                </p>
                <p>
                  <strong className="text-foreground">Privacy Protection:</strong> All uploaded media 
                  is processed locally or in secure, temporary storage. We do not retain user files or 
                  build databases of analyzed content without explicit consent.
                </p>
                <p>
                  <strong className="text-foreground">Limitations:</strong> No detection system is 
                  perfect. Results should be interpreted as part of a broader verification process, 
                  not as definitive proof. Human judgment remains essential.
                </p>
                <p>
                  <strong className="text-foreground">Transparency:</strong> We aim to make our 
                  methodology clear and our results explainable, helping users understand both the 
                  capabilities and limitations of AI-based detection.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
