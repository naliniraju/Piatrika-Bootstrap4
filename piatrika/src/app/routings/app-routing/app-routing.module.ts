import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FarmersComponent } from 'src/app/components/farmers/farmers/farmers.component';
import { AddFarmersComponent } from 'src/app/components/farmers/add-farmers/add-farmers.component';
import { FarmersDetailsComponent } from 'src/app/components/farmers/farmers-details/farmers-details.component';
import { VillageComponent } from 'src/app/components/village/village/village.component';
import { AddVillageComponent } from 'src/app/components/village/add-village/add-village.component';
import { VillageDetailsComponent } from 'src/app/components/village/village-details/village-details.component';
import { DivisionSectionComponent } from 'src/app/components/division_section/division-section/division-section.component';
import { AddDivisionSectionComponent } from 'src/app/components/division_section/add-division-section/add-division-section.component';
import { DivisionSectionDetailsComponent } from 'src/app/components/division_section/division-section-details/division-section-details.component';
import { HomeComponent } from 'src/app/components/home/home/home.component';
import { LandVillageComponent } from 'src/app/components/land_village/land-village/land-village.component';
import { LandVillageDetailsComponent } from 'src/app/components/land_village/land-village-details/land-village-details.component';
import { AddLandVillageComponent } from 'src/app/components/land_village/add-land-village/add-land-village.component';
import { ApplicationTreatmentComponent } from 'src/app/components/application_treatment/application-treatment/application-treatment.component';
import { ApplicationTreatmentDetailsComponent } from 'src/app/components/application_treatment/application-treatment-details/application-treatment-details.component';
import { AddApplicationTreatmentComponent } from 'src/app/components/application_treatment/add-application-treatment/add-application-treatment.component';
import { SeasonComponent } from 'src/app/components/season/season/season.component';
import { AddSeasonComponent } from 'src/app/components/season/add-season/add-season.component';
import { SeasonDetailsComponent } from 'src/app/components/season/season-details/season-details.component';
import { LoanComponent } from 'src/app/components/loan/loan/loan.component';
import { AddLoanComponent } from 'src/app/components/loan/add-loan/add-loan.component';
import { LoanDetailsComponent } from 'src/app/components/loan/loan-details/loan-details.component';
import { BankComponent } from 'src/app/components/bank/bank/bank.component';
import { AddBankComponent } from 'src/app/components/bank/add-bank/add-bank.component';
import { BankDetailsComponent } from 'src/app/components/bank/bank-details/bank-details.component';
import { FarmerBankDetailsComponent } from 'src/app/components/farmer_bank/farmer-bank-details/farmer-bank-details.component';
import { FarmerBankComponent } from 'src/app/components/farmer_bank/farmer-bank/farmer-bank.component';
import { AddFarmerBankComponent } from 'src/app/components/farmer_bank/add-farmer-bank/add-farmer-bank.component';
import { PersonComponent } from 'src/app/components/person/person/person.component';
import { AddPersonComponent } from 'src/app/components/person/add-person/add-person.component';
import { PersonDetailsComponent } from 'src/app/components/person/person-details/person-details.component';
import { GuarantorComponent } from 'src/app/components/guarantor/guarantor/guarantor.component';
import { AddGuarantorComponent } from 'src/app/components/guarantor/add-guarantor/add-guarantor.component';
import { GuarantorDetailsComponent } from 'src/app/components/guarantor/guarantor-details/guarantor-details.component';
import { FarmerRelationsComponent } from 'src/app/components/farmer_relations/farmer-relations/farmer-relations.component';
import { AddFarmerRelationsComponent } from 'src/app/components/farmer_relations/add-farmer-relations/add-farmer-relations.component';
import { FarmerRelationsDetailsComponent } from 'src/app/components/farmer_relations/farmer-relations-details/farmer-relations-details.component';
import { PhoneComponent } from 'src/app/components/phone/phone/phone.component';
import { AddPhoneComponent } from 'src/app/components/phone/add-phone/add-phone.component';
import { PhoneDetailsComponent } from 'src/app/components/phone/phone-details/phone-details.component';
import { PlotVisitComponent } from 'src/app/components/plot_visit/plot-visit/plot-visit.component';
import { AddPlotVisitComponent } from 'src/app/components/plot_visit/add-plot-visit/add-plot-visit.component';
import { PlotVisitDetailsComponent } from 'src/app/components/plot_visit/plot-visit-details/plot-visit-details.component';
import { CropComponent } from 'src/app/components/crop/crop/crop.component';
import { AddCropComponent } from 'src/app/components/crop/add-crop/add-crop.component';
import { CropDetailsComponent } from 'src/app/components/crop/crop-details/crop-details.component';
import { VarietyComponent } from 'src/app/components/variety/variety/variety.component';
import { AddVarietyComponent } from 'src/app/components/variety/add-variety/add-variety.component';
import { VarietyDetailsComponent } from 'src/app/components/variety/variety-details/variety-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'farmers',
    component: FarmersComponent
  },
  {
    path: 'farmer/add',
    component: AddFarmersComponent
  },
  {
    path: 'farmers/:id',
    component: FarmersDetailsComponent
  },
  {
    path: 'villages',
    component: VillageComponent
  },
  {
    path: 'village/add',
    component: AddVillageComponent
  },
  {
    path: 'villages/:id',
    component: VillageDetailsComponent
  },
  {
    path: 'divisionmodels',
    component: DivisionSectionComponent
  },
  {
    path: 'divisionmodel/add',
    component: AddDivisionSectionComponent
  },
  {
    path: 'divisionmodels/:id',
    component: DivisionSectionDetailsComponent
  },
  {
    path: 'landvillages',
    component: LandVillageComponent
  },
  {
    path: 'landvillage/add',
    component: AddLandVillageComponent
  },
  {
    path: 'landvillages/:id',
    component: LandVillageDetailsComponent
  },
  {
    path: 'applicationtreatments',
    component: ApplicationTreatmentComponent
  },
  {
    path: 'applicationtreatment/add',
    component: AddApplicationTreatmentComponent
  },
  {
    path: 'applicationtreatments/:id',
    component: ApplicationTreatmentDetailsComponent
  },
  {
    path: 'seasons',
    component: SeasonComponent
  },
  {
    path: 'season/add',
    component: AddSeasonComponent
  },
  {
    path: 'seasons/:id',
    component: SeasonDetailsComponent
  },
  {
    path: 'loans',
    component: LoanComponent
  },
  {
    path: 'loan/add',
    component: AddLoanComponent
  },
  {
    path: 'loans/:id',
    component: LoanDetailsComponent
  },
  {
    path: 'banks',
    component: BankComponent
  },
  {
    path: 'bank/add',
    component: AddBankComponent
  },
  {
    path: 'banks/:id',
    component: BankDetailsComponent
  },
  {
    path: 'farmerbanks',
    component: FarmerBankComponent
  },
  {
    path: 'farmerbank/add',
    component: AddFarmerBankComponent
  },
  {
    path: 'farmerbanks/:id',
    component: FarmerBankDetailsComponent
  },
  {
    path: 'persons',
    component: PersonComponent
  },
  {
    path: 'person/add',
    component: AddPersonComponent
  },
  {
    path: 'persons/:id',
    component: PersonDetailsComponent
  },
  {
    path: 'guarantors',
    component: GuarantorComponent
  },
  {
    path: 'guarantor/add',
    component: AddGuarantorComponent
  },
  {
    path: 'guarantors/:id',
    component: GuarantorDetailsComponent
  },
  {
    path: 'farmerrelations',
    component: FarmerRelationsComponent
  },
  {
    path: 'farmerrelation/add',
    component: AddFarmerRelationsComponent
  },
  {
    path: 'farmerrelations/:id',
    component: FarmerRelationsDetailsComponent
  },
  {
    path: 'phones',
    component: PhoneComponent
  },
  {
    path: 'phone/add',
    component: AddPhoneComponent
  },
  {
    path: 'phones/:id',
    component: PhoneDetailsComponent
  },
  {
    path: 'plotvisits',
    component: PlotVisitComponent
  },
  {
    path: 'plotvisit/add',
    component: AddPlotVisitComponent
  },
  {
    path: 'plotvisits/:id',
    component: PlotVisitDetailsComponent
  },
  {
    path: 'crops',
    component: CropComponent
  },
  {
    path: 'crop/add',
    component: AddCropComponent
  },
  {
    path: 'crops/:id',
    component: CropDetailsComponent
  },
  {
    path: 'varietees',
    component: VarietyComponent
  },
  {
    path: 'varietee/add',
    component: AddVarietyComponent
  },
  {
    path: 'varietees/:id',
    component: VarietyDetailsComponent
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
