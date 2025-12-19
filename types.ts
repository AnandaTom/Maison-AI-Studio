/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export interface Testimonial {
  stars: number;
  project: string;
  quote: string;
  date: string;
}

export interface Stat {
  val: string;
  label: string;
}

export interface CaseStudy {
  title: string;
  result: string;
  description: string;
  tags: string[];
}
