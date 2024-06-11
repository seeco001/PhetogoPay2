package com.amplifyframework.datastore.generated.model;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.amplifyframework.core.model.ModelPath;
import com.amplifyframework.core.model.PropertyPath;

/** This is an auto generated class representing the ModelPath for the CreditTransaction type in your schema. */
public final class CreditTransactionPath extends ModelPath<CreditTransaction> {
  private UserProfilePath activeProfile;
  CreditTransactionPath(@NonNull String name, @NonNull Boolean isCollection, @Nullable PropertyPath parent) {
    super(name, isCollection, parent, CreditTransaction.class);
  }
  
  public synchronized UserProfilePath getActiveProfile() {
    if (activeProfile == null) {
      activeProfile = new UserProfilePath("activeProfile", false, this);
    }
    return activeProfile;
  }
}
