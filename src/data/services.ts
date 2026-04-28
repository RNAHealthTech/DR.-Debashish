import { Brain, Zap, Activity, ShieldCheck, Microscope, Waves } from 'lucide-react';

export const services = [
  {
    id: 'resistant-migraine',
    title: 'Resistant Migraine',
    shortDesc: 'Recognized authority in the diagnosis and advanced management of complex and refractory headache disorders.',
    icon: Brain,
    fullDesc: `Dr. Debashish Chowdhury is a world-renowned expert in the field of headache disorders. This service focuses on patients who have not responded to standard migraine treatments. 
    
    We utilize advanced diagnostic protocols to identify specific migraine triggers and phenotypes, followed by cutting-edge therapeutic interventions including:
    - Botox therapy for chronic migraine
    - CGRP monoclonal antibody treatments
    - Neuromodulation devices
    - Comprehensive lifestyle and preventive strategies`,
    features: ['Chronic Migraine Management', 'Cluster Headache Treatment', 'Botox for Migraine', 'Advanced Preventive Therapies']
  },
  {
    id: 'dizziness-balance',
    title: 'Dizziness & Balance',
    shortDesc: 'Advanced diagnostic and therapeutic approach to vestibular disorders, vertigo, and chronic imbalance.',
    icon: Waves,
    fullDesc: `Dizziness and balance disorders can significantly impact quality of life. Our specialized clinic provides comprehensive evaluation of the vestibular system.
    
    Services include:
    - Diagnostic testing for BPPV, Vestibular Migraine, and Meniere's disease
    - Canalith repositioning maneuvers
    - Vestibular rehabilitation therapy
    - Management of persistent postural-perceptual dizziness (PPPD)`,
    features: ['Vertigo Diagnosis', 'Vestibular Rehabilitation', 'Balance Assessment', 'Neuro-Otology Consultations']
  },
  {
    id: 'stroke-intervention',
    title: 'Stroke Intervention',
    shortDesc: 'Acute stroke management including thrombolysis and mechanical thrombectomy to minimize damage.',
    icon: Zap,
    fullDesc: `Time is brain when it comes to stroke. Dr. Chowdhury leads a high-performance stroke team dedicated to rapid intervention.
    
    Our stroke services encompass:
    - Hyperacute management (Thrombolysis)
    - Coordination for Mechanical Thrombectomy
    - Comprehensive stroke risk factor modification
    - Post-stroke neurological rehabilitation`,
    features: ['Acute Stroke Care', 'TIA Clinic', 'Carotid Artery Assessment', 'Secondary Prevention']
  },
  {
    id: 'complex-epilepsy',
    title: 'Complex Epilepsy',
    shortDesc: 'State-of-the-art care for patients with drug-resistant forms of epilepsy through precise diagnosis.',
    icon: Microscope,
    fullDesc: `For patients with epilepsy that is difficult to control, we offer advanced diagnostic and management strategies.
    
    Our approach includes:
    - Video-EEG monitoring coordination
    - Advanced imaging (3T MRI, PET/SPECT)
    - Rational polytherapy and newest generation anti-seizure medications
    - Evaluation for epilepsy surgery and VNS therapy`,
    features: ['Drug-Resistant Epilepsy', 'EEG Monitoring', 'Medication Management', 'Surgical Evaluation']
  },
  {
    id: 'alzheimers-care',
    title: 'Alzheimer’s Care',
    shortDesc: 'Compassionate, holistic, and integrated management for Alzheimer’s disease and other dementias.',
    icon: ShieldCheck,
    fullDesc: `Memory loss and cognitive decline require a specialized and compassionate approach. We provide comprehensive dementia care.
    
    Services include:
    - Detailed cognitive and neuropsychological assessment
    - Early diagnosis of Alzheimer's and other dementias
    - Pharmacological management of cognitive and behavioral symptoms
    - Family and caregiver support and education`,
    features: ['Memory Assessments', 'Dementia Management', 'Cognitive Rehabilitation', 'Caregiver Support']
  }
];
